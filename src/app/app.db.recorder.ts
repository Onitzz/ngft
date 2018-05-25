import { Recorder } from './app.recorder';

export class Db implements Recorder {

    save(text: string){
        console.log('db save: ' + text);
        
    }

}