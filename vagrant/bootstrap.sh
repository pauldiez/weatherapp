#!/usr/bin/env bash

# Install pip
sudo aptitude install -y python3-pip
sudo pip3 install Django==1.7.1

# Install git
sudo apt-get install -y git

# Install weather api library 
sudo pip3 install pyowm


# Clone git if it does not already exist
if [ ! -d "/home/weatherapp" ] 
then
  	cd /home
	git clone https://github.com/pauldiez/weatherapp.git
fi

# cd into repo
cd /home/weatherapp/app

# Start weather app
sudo python3 manage.py runserver 0.0.0.0:80






