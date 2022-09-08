const os = require('os');

setInterval(() => {
    const { cpus, arch, platform, totalmem, freemem} = os;
    const cpu = cpus();
    const tRam = totalmem() /1073741824;
    const fRam = freemem() /1073741824;
    const usage = (fRam/tRam) *100;
    const stats = {
        OS: platform(),
        Arch: arch(),
        Total_Ram: `${parseFloat(tRam).toFixed(4)} GB`,
        Free_Ram: `${parseFloat(fRam).toFixed(4)} GB`,
        Usage: `${parseFloat(usage).toFixed(1)} %`,
    }
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 2000)
