
namespace screenMagic {
    /**
     * asdfasdfasdf
     */
    //% blockId=screenmagicplotat
    //% block ="plot at $index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void {
        index |= 0;
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y);
    }
    /**
     * rowrow
     */
    //% blockId=screenmagicplotat4
    //% block ="plot row at $index"
    //% index.min=0 index.max=4
    export function drawRectangle(row: number): void{
        let startPoint = (row * 5)+ row;
        let limit = Math.abs(row -5);
        for(let i = startPoint; i < (startPoint+limit); i++){
            plotAt(i);
            basic.pause(100);
        }
        for(let i = (startPoint + limit); i <= 25;i= i+5){
            plotAt(i);
            basic.pause(100);
        }
        for(let i = 24; i > (25-limit); i--){
            plotAt(i);
            basic.pause(100);
        }
        for (let i = 25-limit; i > row; i= i-5) {
            plotAt(i);
            basic.pause(100);
        }
    }
			
}