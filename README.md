# GYT

# Setting up Azure VM with HTTPs endpoint : 

sudo apt update
sudo apt install nginx

sudo nano /etc/nginx/sites-available/gyptay.conf
sudo ln -s /etc/nginx/sites-available/gytpay.conf 
cd /etc/nginx/sites-enabled/
vim /etc/systemd/system/uvicorn.service


sudo nginx -s reload
sudo systemctl restart nginx

sudo nginx -t
sudo systemctl reload nginx