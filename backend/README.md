# Backend of IoTv2 Smart Home application

### Local development: ###

#### XAMPP STACK: ####
Includes: Apache 2.4.46, MariaDB 10.4.18, PHP 7.3.27, phpMyAdmin 5.1.0, OpenSSL 1.1.1

___Database info:___ MariaDB 10.4.18

Port: 3306

path: `C:\xampp\phpMyAdmin\config.inc.php` 

with:

`/* Authentication type and info */`
`$cfg['Servers'][$i]['auth_type'] = 'cookie';`
`$cfg['Servers'][$i]['user'] = 'root';`
`$cfg['Servers'][$i]['password'] = '';`
`$cfg['Servers'][$i]['extension'] = 'mysqli';`
`$cfg['Servers'][$i]['AllowNoPassword'] = true;`
`$cfg['Lang'] = '';`

then XAMPP console for mysql:

`mysql -u root -p`

`Password:<empty password>`

Add command:

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootadmin';`

`FLUSH PRIVILEGES;`

Verify:

`SELECT user,authentication_string,plugin,host FROM mysql.user;`


