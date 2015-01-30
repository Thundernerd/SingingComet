///<reference path="../TypeDefinitions/waa.d.ts"/>

class Voice {
    Oscillator: OscillatorNode;

    constructor(context: AudioContext) {
        this.Oscillator = context.createOscillator();
        //this.Oscillator.type = 3;
        
        this.Oscillator.frequency.value = 200;

        this.Oscillator.connect(context.destination);
        
        this.Oscillator.start(0);
    }
}