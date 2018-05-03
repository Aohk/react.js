
class React{
    constructor(){
        this.props = 4;
    }

    whateverfunction(){
        console.log('logging')
    }
}
class Header extends React {
    constructor(){
        super();
    }
}
const react = new React(),header = new Header();
    react.whateverfunction()
        console.log(header.props)