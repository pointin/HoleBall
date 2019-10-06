//import encrypt from "encryptjs";

const {ccclass, property, executionOrder, disallowMultiple} = cc._decorator;

@ccclass
@executionOrder(-15)
@disallowMultiple
export default class Game extends cc.Component {
    private static _instance: Game = null;
    static get instance(){
        return Game._instance;
    }
    constructor(){
        super();
        return Game._instance || (Game._instance = this);
    }
    saveData = {
        lastScore: 0,
        bestScore: 0
    }

    
    loadSaveData(){

    }

    writeSaveData(){
        //Object.assign(this.saveData, JSON.parse(cc.sys.localStorage.getItem('saveData')));
        console.log("saveData "+this.saveData);
    }
}
