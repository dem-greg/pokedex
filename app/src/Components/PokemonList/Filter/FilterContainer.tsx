import React from "react";
import {connect} from "react-redux";
import Filter from "./Filter";
import {
    actions, getPokemonData,
    getPokemonWithTypes,
    getTypes,
    requestPokemon,
} from "../../../Redux/pokedexReducer";
import {pokemonListType} from "../../../Types/Type";
import {AppStateType} from "../../../Redux/store";


type MapStateToPropsType = {

    activeFilter: Array<{ type: string }>
    pokemonList: Array<pokemonListType>
    typesData: Array<{ name: string }>
}

type MapDispatchToPropsType = {
    getTypes: () => void
    getPokemonWithTypes: (type: string) => any
    requestPokemon: (count: number, cardQuantity: number | any) => any
    setActiveFilter: (name: string) => void
    delActiveFilter: (name: string) => void
    resetPokemonInfo: () => any
    getPokemonData: (name: string) => void
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType

type StateType = {
    activeBtn:boolean
}


class FilterListContainer extends React.Component<PropsType, StateType> {

    constructor(props: any) {
        super(props);
        this.state = {
           activeBtn:false};
    }

    componentDidMount() {
        this.props.getTypes()
    }


     onShowPokemon = async () =>  {
         this.props.resetPokemonInfo()

         for(const element of this.props.activeFilter ){

             await this.props.getPokemonWithTypes(element.type);
             console.log("here 2")
             for(const el of this.props.pokemonList ){
                 await this.props.getPokemonData(el.pokemon.name)
             }
         }
         this.isActiveBtn()
    }

    isActiveBtn = () => {
        this.setState({
          activeBtn: !this.state.activeBtn
        });
    }


     onShowAllPokemon = async () => {

         this.props.resetPokemonInfo()
             await this.props.requestPokemon(0, 20);

             for(const el of this.props.pokemonList ){
                 await this.props.getPokemonData(el.name)
             }
         this.isActiveBtn()

    }

    setCheckType = (name: string) => {

        this.props.setActiveFilter(name)
    }
    delCheckType = (name: string) => {

        this.props.delActiveFilter(name)
    }


    render() {
        return <Filter {...this.props}  activeBtn={this.state.activeBtn}  onShowAllPokemon={this.onShowAllPokemon} onShowPokemon={this.onShowPokemon}
                       setCheckType={this.setCheckType} delCheckType={this.delCheckType}/>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        typesData: state.pokedex.typesData,
        pokemonList: state.pokedex.pokemonListData,
        activeFilter: state.pokedex.activeFilter,

    }


}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    getTypes,
    getPokemonWithTypes,
    requestPokemon,
    getPokemonData,
    setActiveFilter: actions.setActiveFilter,
    delActiveFilter: actions.delActiveFilter,
    resetPokemonInfo: actions.resetPokemonInfo

})(FilterListContainer);



