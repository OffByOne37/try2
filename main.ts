
namespace bachelor_thesis {
    /**
     * This code is only for demonstration purpose
     */
    //% blockId=bachelor_block
    //% block ="plot at $index"
    //% index.min=0 index.max=25
    export function exampleBlock(index: number): void {
        index |= 0;
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y);
    }	
}