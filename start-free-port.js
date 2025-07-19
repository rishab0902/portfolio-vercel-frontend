const findFreePort = require('find-free-port');
const { spawn } = require('child_process');

const DEFAULT_PORT = 3000;
const MAX_PORT = 3100;

findFreePort(DEFAULT_PORT, MAX_PORT, '127.0.0.1', (err, freePort) => {
    if (err) {
        console.error('Error finding free port:', err);
        process.exit(1);
    }
    console.log(`Starting Next.js on port ${freePort}...`);
    const child = spawn('npm', ['start'], {
        stdio: 'inherit',
        env: { ...process.env, PORT: freePort }
    });
    child.on('exit', code => process.exit(code));
}); 