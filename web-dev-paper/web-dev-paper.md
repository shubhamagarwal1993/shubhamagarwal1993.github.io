# Steps to get a website up and running completely:

## Components of a completely functional website

- Setting up a server:
    - Ubuntu 16.04
    - install nginx
    - install supervisor
    - Domain name (set up on www and *.)
- Deciding on the languages (AWS EC2 t2.micro with static public ip):
- Backend - php
- Frontend - html / css / bootstrap / JQuery / JS / elm
- Database (but will not use it for now)
- AWS
- load balancers (for multiple DB servers)

We should use an “Ansible Script” to set this all up. This is so:
	- To maintain consistency
	- Save time next time we need to bring up a machine
	- create multiple copies quickly if we need another machine

### START

- Set up EC2 on AWS:
    - Make new instance of Ubuntu 16.04
    - For security groups use 
- Download <>.pen file
- Edit ~/.ssh/config file, and add
		`Hostname `
- You can now go to home with `cd` and use ssh <>
- Set up ubuntu
- sudo apt-get update
- sudo apt-get upgrade
- check python version ()
- install nom with `sudo apt-get install npm`
- Set up nginx
- Sdsdsv
- Set up gunicorn


We can actually do all this with a single `Ansible script` as below:








check
single page apps
python/django OR python/flask OR php/cakephp OR what  else to use

After the script has finished running:
Check if script has thrown any warnings/errors
Check if all versions are latest
Check if website up by using domain name



front end in html,css,js

backend in python



Using SQL for databases
Use SQL designer; something very basic to design 
Can fork it from here (https://github.com/ondras/wwwsqldesigner)
Can also use it straight on this link (shubham.io/sql)




set up your vim config file (~/.vimrc - will have to be created)
" show line numbers
set number

" Turn on syntax highlighting
syntax on

filetype plugin indent on
" show existing tab with 4 spaces width
set tabstop=4
" when indenting with '>', use 4 spaces width
set shiftwidth=4
" On pressing tab, insert 4 spaces
set expandtab

" highlight word on search
set hlsearch
