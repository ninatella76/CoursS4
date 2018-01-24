Renommer la machine :
nano /etc/hostname
>> master.tbwm.fr 
/etc/init.d/hostname.sh

Renommer le nom de domaine :

nano /etc/hosts
/etc/network/interfaces

Verifier que dans /etc/host.conf on a :
>> 
order hosts,bind
multi on

/etc/init.d/networking restart
