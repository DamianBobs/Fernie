// guid: 'e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8'
// container number: HMMU6277266

export class Container {
    public Id: string;
    public containerNumber: string;
    public status: string;
    public etd: string;
    public eta: string;
    public origin: string;
    public destination: string;
    public shippingLegs: ShippingLeg[];

    constructor(init?: Partial<Container>) {
        Object.assign(this, init);
    }

}

export class ShippingLeg {
    public legOrder: number;
    public atd: string;
    public ata: string;
    public location: string;
    constructor(init?: Partial<ShippingLeg>) {
        Object.assign(this, init);
    }

}

export const demoContainer = new Container();
demoContainer.Id = 'e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8';
demoContainer.containerNumber = 'HMMU6277266';
demoContainer.status = 'Empty Returned';
demoContainer.etd = '2021-01-24';
demoContainer.eta = '2021-03-29';
demoContainer.origin = 'Manila, Philippines';
demoContainer.destination = 'Grand Prairie, United States';

demoContainer.shippingLegs = [
     {
         legOrder: 1,
         atd: '2021-01-24',
         ata: '2021-03-29',
         location: 'Manila, Philippines'
     },
     {
        legOrder: 2,
        atd: '2021-01-27',
        ata: '2021-03-05',
        location: 'Kaohsiung, Taiwan'
    },
    {
        legOrder: 3,
        atd: '2021-04-15',
        ata: '2021-03-21',
        location: 'Los Angeles, United States'
    },
 ];

