import React, { Component } from "react";
import FotoItem from "./Foto";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { fotos: [] };
    this.login = this.props.login;
    
  }

  componentWillMount() {
    this.props.store.subscribe(fotos => {
      this.setState({fotos:this.props.store.getState()});
    });
  }

  carregaFotos() {
    let urlPerfil;

    if (this.login === undefined) {
      urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem(
        "auth-token"
      )}`;
    } else {
      urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
    }
    const listaFixa = [{"urlPerfil":"https://s3.amazonaws.com/loa-production-23ffs35gui41a/writers/images/000/000/187/big/lincoln_abraham_WD.jpg?1458837750","loginUsuario":"alots","horario":"24/09/2019 14:32","urlFoto":"https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/02/thomas-edison-1.jpg","id":1,"likeada":false,"likers":[],"comentarios":[{"login":"alots","texto":"Agora vai","id":1},{"login":"alots","texto":"Bomba","id":2},{"login":"alots","texto":"Bomba","id":3},{"login":"alots","texto":"1","id":4},{"login":"alots","texto":"Agora vai","id":5},{"login":"alots","texto":"Agora vai","id":6},{"login":"alots","texto":"x","id":7}],"comentario":"Wow que legal!"},{"urlPerfil":"https://s3.amazonaws.com/loa-production-23ffs35gui41a/writers/images/000/000/187/big/lincoln_abraham_WD.jpg?1458837750","loginUsuario":"alots","horario":"24/09/2019 14:32","urlFoto":"https://www.investors.com/wp-content/uploads/2016/03/LSpic_Franklin_031816_pd.jpg","id":2,"likeada":false,"likers":[],"comentarios":[{"login":"alots","texto":"Agora vai","id":8}],"comentario":"Isso é bom demais!"}];

    this.props.store.dispatch({type:'LISTAGEM',fotos:listaFixa});

    // this.props.store.lista(urlPerfil);
  }

  componentDidMount() {
    this.carregaFotos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== undefined) {
      this.login = nextProps.login;
      this.carregaFotos();
    }
  }

  like(fotoId) {
    this.props.store.like(fotoId);
   
  }

  comenta(fotoId, textoComentario) {
    this.props.store.comenta(fotoId, textoComentario);
  }

  render() {
    return (
      <div className="fotos container">
        <ReactCSSTransitionGroup
          transitionName="timeline"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.fotos.map(foto => (
            <FotoItem
              key={foto.id}
              foto={foto}
              like={this.like.bind(this)}
              comenta={this.comenta.bind(this)}
            />
          ))}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
