# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.box = "gluebox"
    config.vm.network "private_network", ip: "196.168.33.10"
    config.vm.hostname = "glue"
    config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }
end
