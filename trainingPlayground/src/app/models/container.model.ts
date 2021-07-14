// guid: 'e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8'
// container number: HMMU6277266

export class Container {
    public Id: string;
    public containerNumber: string;
    public Status: string;
    public etd: string;
    public eta: string;

    constructor(init?: Partial<Container>) {
        Object.assign(this, init);
    }

}
