sudo apt-get update

sudo apt-get install -y nmap
sudo apt-get install -y dnsutils
sudo apt-get install -y git

sudo apt-get install -y dirmngr --install-recommends
curl -sL https://deb.nodesource.com/setup | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo npm i pm2 webpack -g


cd ~/Downloads
wget http://dlcdnet.asus.com/pub/ASUS/mb/Linux/Tinker_Board_2GB/GPIO_API_for_Python.zip
unzip GPIO_API_for_Python.zip
sudo python setup.py install
sudo python3 setup.py install

sudo apt-get install -y pip
sudo apt-get install -y python3-pip
sudo apt-get install -y ipython
sudo apt-get install -y python-numpy python-scipy python-matplotlib python-sympy python-nose
sudo apt-get install -y python3-setuptools

sudo apt-get autoremove
