(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{264:function(a,t,e){"use strict";e.r(t);var n=e(0),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"环境说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境说明")]),a._v(" "),e("p",[a._v("CentOS 7.4\nnginx-1.14.0\njava 8\nfirewalld")]),a._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),e("h3",{attrs:{id:"更新yum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新yum","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新yum")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yum -y update\n")])])]),e("h3",{attrs:{id:"安装nginx依赖项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx依赖项","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装nginx依赖项")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yum install -y wget vim gcc gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel\n")])])]),e("blockquote",[e("p",[a._v("拷贝libldap\n（CentOS默认安装路径不符，可能导致安装失败。因此需要再将libldap拷贝到新目录）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cp -frp /usr/lib64/libldap* /usr/lib/\n")])])]),e("h3",{attrs:{id:"创建web服务用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建web服务用户组","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建web服务用户组")]),a._v(" "),e("blockquote",[e("p",[a._v("（nginx，php等不同服务，需要使用相同的用户才能共享文件。因此我们创建web服务统一的用户组及用户：www组及www用户）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd /tmp\ngroupadd www\nuseradd -g www www\n")])])]),e("h3",{attrs:{id:"创建网站静态文件目录及java服务目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建网站静态文件目录及java服务目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建网站静态文件目录及Java服务目录")]),a._v(" "),e("blockquote",[e("p",[a._v("/var/www\t静态文件目录（由nginx管理）\n/var/jar\t\tJava服务目录（存放可执行jar包）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir /var/www/\nchown -R www:www /var/www\n\nmkdir /var/jar/\nchown -R www:www /var/jar\n\n")])])]),e("h3",{attrs:{id:"配置防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置防火墙","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置防火墙")]),a._v(" "),e("blockquote",[e("p",[a._v("CentOS 7.4 使用firewalld 而不是 iptable\n启用firewalld")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("systemctl start firewalld.service\n")])])]),e("blockquote",[e("p",[a._v("打开80端口并重启")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("firewall-cmd --permanent --zone=public --add-port=80/tcp\nfirewall-cmd --reload\n")])])]),e("blockquote",[e("p",[a._v("firewalld 基本操作命令如下：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("打开80端口\tfirewall-cmd --permanent --zone=public --add-port=80/tcp\n\t\t\tfirewall-cmd --reload\n\n启动\t\t\tsystemctl start firewalld.service\n停止\t\t\tsystemctl stop firewalld.service\n重启\t\t\tsystemctl restart firewalld.service\n自启动\t\tsystemctl enable firewalld.service\n停止自启动\tsystemctl disable firewalld.service\n查看打开端口\tfirewall-cmd --zone=public --list-ports\n\n")])])]),e("h2",{attrs:{id:"nginx安装和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装和配置","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx安装和配置")]),a._v(" "),e("h3",{attrs:{id:"安装nginx-1-14-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx-1-14-0","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装nginx-1.14.0")]),a._v(" "),e("blockquote",[e("p",[a._v("安装到usr/local目录")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd /usr/local/\nwget http://nginx.org/download/nginx-1.14.0.tar.gz\ntar -zxvf nginx-1.14.0.tar.gz\nrm nginx-1.14.0.tar.gz\ncd nginx-1.14.0\n./configure --prefix=/usr/local/nginx --with-http_ssl_module\nmake\nmake install\n")])])]),e("h3",{attrs:{id:"配置nginx自启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx自启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置nginx自启动")]),a._v(" "),e("blockquote",[e("p",[a._v("创建nginx服务配置文件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vim /usr/lib/systemd/system/nginx.service\n")])])]),e("blockquote",[e("p",[a._v("编辑如下内容")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[Unit]\nDescription=nginx\nAfter=network.target\n[Service]\nType=forking\nExecStart=/usr/local/nginx/sbin/nginx\nExecReload=/usr/local/nginx/sbin/nginx -s reload\nExecStop=/usr/local/nginx/sbin/nginx -s stop\nPrivateTmp=true\n[Install]\nWantedBy=multi-user.target\n")])])]),e("blockquote",[e("p",[a._v("设置nginx自启动")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("chmod 754 /usr/lib/systemd/system/nginx.service\nsystemctl enable nginx.service\nsystemctl restart nginx.service\n")])])]),e("h3",{attrs:{id:"nginx配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx配置")]),a._v(" "),e("blockquote",[e("p",[a._v("编辑配置文件( usr/local/nginx/conf/nginx.conf )")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vim usr/local/nginx/conf/nginx.conf\n")])])]),e("blockquote",[e("p",[a._v("修改nginx.conf中的用户，设置为web服务用户 www")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("user  www;\n")])])]),e("blockquote",[e("p",[a._v("修改nginx.conf中的location配置，指向/var/www 目录")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("        location / {\n            root\t/var/www;\n            index\tindex.html index.htm;\n        }\n\n        error_page\t500 502 503 504  /50x.html;\n        location = /50x.html {\n            root\t/var/www;\n        }\n")])])]),e("blockquote",[e("p",[a._v("在nginx.conf 配置文件中将api子域名指向8080端口的 java web服务")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("        location /api {\n            proxy_pass http://localhost:8080;\n            proxy_redirect off;\n        }\n")])])]),e("blockquote",[e("p",[a._v("完整nginx.conf 配置文件参考如下：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("user  www;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n    server {\n    \n        listen       80;\n        server_name  localhost;\n        \n        location / {\n            root\t/var/www;\n            index\tindex.html index.htm;\n        }\n        \n        location /api {\n            proxy_pass http://localhost:8080;\n            proxy_redirect off;\n        }\n        \n        error_page\t500 502 503 504  /50x.html;\n        location = /50x.html {\n            root\t/var/www;\n        }\n    }\n}\n\n")])])]),e("h3",{attrs:{id:"启用nginx服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用nginx服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 启用nginx服务")]),a._v(" "),e("blockquote",[e("p",[a._v("nginx常用命令")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("启动\t\tservice nginx start\n重启\t\tservice nginx restart\n停止\t\tservice nginx stop\n强制关闭\tpkill nginx\n\n")])])]),e("h2",{attrs:{id:"java-8-安装和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-8-安装和配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Java 8 安装和配置")]),a._v(" "),e("h3",{attrs:{id:"先卸载已有java环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先卸载已有java环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 先卸载已有java环境")]),a._v(" "),e("blockquote",[e("p",[a._v("安装之前先检查一下系统有没有自带jdk")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("rpm -qa |grep java\nrpm -qa |grep jdk\nrpm -qa |grep gcj\n")])])]),e("blockquote",[e("p",[a._v("如果有安装可以使用如下命令批量卸载所有带有Java的文件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("rpm -qa | grep java | xargs rpm -e --nodeps \n")])])]),e("h3",{attrs:{id:"安装java-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装java-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装java 8")]),a._v(" "),e("blockquote",[e("p",[a._v("安装1.8.0的所有文件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yum install java-1.8.0-openjdk* -y\n")])])]),e("blockquote",[e("p",[a._v("安装后用 java -version命令可查看版本（当前1.8.0_191）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('java -version\nopenjdk version "1.8.0_191"\nOpenJDK Runtime Environment (build 1.8.0_191-b12)\nOpenJDK 64-Bit Server VM (build 25.191-b12, mixed mode)\n')])])]),e("h3",{attrs:{id:"java优化和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java优化和配置","aria-hidden":"true"}},[a._v("#")]),a._v(" java优化和配置")]),a._v(" "),e("blockquote",[e("p",[a._v("目前还没有配置环境变量和优化 java 内存配置")])])])}),[],!1,null,null,null);t.default=s.exports}}]);