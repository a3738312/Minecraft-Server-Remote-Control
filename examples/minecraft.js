var RCON = require('../RCON');
var rcon = new RCON();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rcon.connect('a3738312.e2.luyouxia.net', 22428, 'a3395916')
    .then(() => {
        console.log('成功链接服务器');
        console.log("按Ctrl+C退出")
        console.log("请输入命令：");
        rl.on('line', function (input) {
            // 下面就可以对数据进行处理......  
            rcon.send(input)
                .then((res) => {
                    if (res) {
                        console.log(res);
                    } else {
                        console.log("执行成功");
                    }
                })
                .catch((error) => {
                    console.log("err: " + error);
                    console.error(`An error occured: ${error}`);
                });
            // rl.close();
        });

        rl.on('close', function () {
            console.log('\n程序结束');
            process.exit(0);
        });
    });