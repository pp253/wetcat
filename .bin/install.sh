echo "Remember to run the script with privileges!"

userhome=/home/linaro

echo "Update the packages..."
apt-get update

echo "Install the system tools..."
apt-get install -y nmap
apt-get install -y dnsutils
apt-get install -y dirmngr --install-recommends

echo "Install and configurate the git..."
apt-get install -y git
git config --global user.name "pp253"
git config --global user.email "pp.pp253@gmail.com"

echo "Install and configurate the ntp..."
apt-get install -y ntp
mv /etc/ntp.conf /etc/ntp.conf.bak
sed '15iline server time.stdtime.gov.tw' /etc/ntp.conf.bak > /etc/ntp.conf

echo "Install the NodeJS and npm, and the recommended modules..."
curl -sL https://deb.nodesource.com/setup | -E bash -
apt-get install -y nodejs
apt-get install -y npm
npm i pm2 webpack nodemon babel-node babel-env -g

cd $userhome/Downloads
wget http://dlcdnet.asus.com/pub/ASUS/mb/Linux/Tinker_Board_2GB/GPIO_API_for_Python.zip
unzip GPIO_API_for_Python.zip
python setup.py install
python3 setup.py install

apt-get install -y pip
apt-get install -y python3-pip
apt-get install -y ipython
apt-get install -y python-numpy python-scipy python-matplotlib python-sympy python-nose
apt-get install -y python3-setuptools

apt-get autoremove

cd $userhome/Documents
mkdir ./Coding
git clone https://github.com/pp253/wettycat.git
git clone https://github.com/pp253/wettycat-dht11.git

cd ./wettycat
git checkout dev
npm install
npm run move
cp ./.bin/ecosystem.config.json ../ecosystem.config.json

cd ../wettycat-dht11
pip install requests

cd ..
pm2 startup
pm2 start ./ecosystem.config.json
pm2 save
