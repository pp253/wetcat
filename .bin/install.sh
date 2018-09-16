sudo apt-get update

sudo apt-get install -y nmap
sudo apt-get install -y dnsutils
sudo apt-get install -y git

sudo apt-get install -y dirmngr --install-recommends
curl -sL https://deb.nodesource.com/setup | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo npm i pm2 webpack nodemon babel-node babel-env -g


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

git config --global user.name "pp253"
git config --global user.email "pp.pp253@gmail.com"

cd ~/Documents
mkdir ./Coding
git clone https://github.com/pp253/wettycat.git
git clone https://github.com/pp253/wettycat-dht11.git

cd ./wettycat
git checkout dev
npm install
npm run move
cp ./.bin/ecosystem.config.json ../ecosystem.config.json

cd ../wettycat-dht11
sudo pip install requests

cd ..
sudo pm2 start ecosystem.config.json
