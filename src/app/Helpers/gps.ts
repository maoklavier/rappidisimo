import {OnInit} from "@angular/core"

export class GPS implements OnInit{
    constructor(){
            if(window.navigator.geolocation){
                window.navigator.geolocation.watchPosition(
                    (position) => {
                        console.log(position);
                    }, (error) => {
                        console.error('Geolocation error: '+ error);
                    }
                );
            }else{
                console.error('Geolocation not supported in this browser')
            }

    }

ngOnInit(){

}
}