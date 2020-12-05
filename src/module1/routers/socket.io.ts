import { profileBL  } from '../bl';
import { serverConfiguration } from "./../../config/server";



export namespace module1ConfigIo {

    export function config(io) {
        const socket_ns = serverConfiguration.module1_socket_ns
        const nsp = io.of(socket_ns);
     
        // send message in socket io when something change by listen to some bl component 
        // ProfileBL.on("action", (data) => {
        //     nsp.emit('activated profiles change', data);
        // });

        nsp.on('connection', function (socket) {
            console.log(`[socket.io]:: the web server is connected`);
        });
    }
}
