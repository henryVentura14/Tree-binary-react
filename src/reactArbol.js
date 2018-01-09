var Nodo = React.createClass({
    render: function() {
        return (
            <div className="">
                <div className="arbol">
                    <h4>{this.props.nodo}</h4>
                </div>
            </div>
        )
    }
});
var NodoRight = React.createClass({
    render: function() {
        return (
            <div className="">
                <div className="arbol">
                    <h4>{this.props.right}</h4>
                </div>
            </div>
        )
    }
});
var NodoLeft = React.createClass({
    render: function() {
        return (
            <div className="">
                <div className="arbol">
                    <h4>{this.props.left}</h4>
                </div>
            </div>

        )
    }
});
var ListaNodos = React.createClass({
    getInitialState: function() {
        return {
            nodos: [
                '1'
            ],
            rights:[
                '2'
            ],
            lefts:[
                '3'
            ],
        };
    },

    add: function() {
        var nuevoNodo = this.refs.nuevoNodo.value;
        var arr = this.state.nodos;
        arr.push(nuevoNodo);
        this.setState({nodos: arr});
        this.refs.nuevoNodo.value = "14";
    },
    addr: function() {
        var nuevoNodor = this.refs.nuevoNodor.value;
        var arr = this.state.rights;
        arr.push(nuevoNodor);
        this.setState({rights: arr});
        this.refs.nuevoNodor.value = "23";
    },
    addl: function() {
        var nuevoNodol = this.refs.nuevoNodol.value;
        var arr = this.state.lefts;
        arr.push(nuevoNodol);
        this.setState({lefts: arr});
        this.refs.nuevoNodol.value = '13';
    },

    eachItem: function(nodo,i) {
        return (
            <Nodo key={i}
                index={i}
                nodo={nodo}>
                {+1}
            </Nodo>
        );
    },
    eachItem: function(right,i) {
        return (
            <NodoRight key={i}
                index={i}
                right={right}>
                {i+1}
            </NodoRight>
        );
    },
    eachItem: function(left,i) {
        return (
            <NodoLeft key={i}
                index={i}
                left={left}>
                {i+1}
            </NodoLeft>
        );
    },
    handleKeyDown: function(e){
        if( e.charCode === 13 ) {
            this.add();
        }
    },
    handleKeyDownr: function(e){
        if( e.charCode === 13 ) {
            this.adr();
        }
    },
    handleKeyDownl: function(e){
        if( e.charCode === 13 ) {
            this.addl();
        }
    },

    render: function() {
        return(<div className="centerBlock">
          <header>
            <h1>Arbol Binario</h1>
            <i>Nodos Raiz:  {this.state.nodos+","}  </i><br/>
            <i>Nodos Derechos: {this.state.rights+","}  </i><br/>
            <i>Nodos Izquierdos: {this.state.lefts+","}  </i><br/>
            <i>PreOrden  : {this.state.nodos+","}  {this.state.lefts+","}  {this.state.rights+","} </i><br/>
            <i>InOrden: {this.state.lefts+","}  {this.state.nodos+","} {this.state.rights+","} </i><br/>
            <i>PostOrden: {this.state.rights+","} {this.state.lefts+","}  {this.state.nodos+","} </i><br/>


        </header>
        <div className="input-group">
            <input required ref="nuevoNodo" type="text"
                onKeyPress={this.handleKeyDown}
                className="form-control"
                placeholder="Agregar Raiz" />
            <span className="input-group-btn">
                <div className="btn btn-default btn-success" type="button"
                    onClick={this.add} > + </div>
             </span>
        </div>
        <div className="input-group">
            <input required ref="nuevoNodor" type="text"
                onKeyPress={this.handleKeyDownr}
                className="form-control"
                placeholder="Agregar right" />
            <span className="input-group-btn">
                <div className="btn btn-default btn-success" type="button"
                    onClick={this.addr} > + </div>
            </span>
        </div>
        <div className="input-group">
            <input  required ref="nuevoNodol" type="text"
                onKeyPress={this.handleKeyDownl}
                className="form-control"
                placeholder="Agregar left"/>
            <span className="input-group-btn">
                <div className="btn btn-default btn-success" type="button"
                    onClick={this.addl}> + </div>
            </span>
        </div>
        <div className="">
            <div className="root">
                {this.state.nodos.map(this.eachItem)}
            </div>
            <div className="right">
                {this.state.rights.map(this.eachItem)}
            </div>
            <div className="left">
                {this.state.lefts.map(this.eachItem)}
            </div>
        </div>
    </div>
)
}
});

ReactDOM.render(<ListaNodos/>, document.getElementById('container'));
