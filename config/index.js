module.exports = {
    hello: {
        frequency: "* * * * *", // frequency at which the cronjob runs
        handler: "handlers/sayhello", // file contains the function that's executed whenever that frequency is che
    },
    goodbye: {
        frequency: "* * * * *", // frequency at which the cronjob runs
        handler: "handlers/saygoodbye", // file contains the function that's executed whenever that frequency is che
    },
    tacos: {
        frequency: "* * * * *", // frequency at which the cronjob runs
        handler: "handlers/tacos", // file contains the function that's executed whenever that frequency is che
    },
}