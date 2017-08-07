import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016'
	}
	],
	selectedPlayerIndex: -1
}

export default function Player(state=initialState, action) {
	let today = new Date();
	let date = today.getDate()+ '/' + (today.getMonth()+1)+'/'+ today.getFullYear();

  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:{
			const addPlayer = [...state.players, {
				name: action.name,
				score: 0,
				created: date
			}];

			return {
				...state,
				players: addPlayer
			}

		}


    case PlayerActionTypes.REMOVE_PLAYER:{
			const removePlayer = [
				...state.players.slice(0,action.index),
				...state.players.slice(action.index + 1) ];
			return {
				...state,
				players: removePlayer
			}
		}

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:{
			const updatePlayerList = state.players.map((player, index)=>{
				if(index === action.index){
					return {
						...player,
						score: player.score + action.score,
						updated: date
					}
				}
				return player
			});
			return {
				...state,
				players: updatePlayerList
			}
		}

		case PlayerActionTypes.SELECT_PLAYER:
				return{
					...state,
					selectedPlayerIndex: action.index
				}
			break;

    default:
      return state;
  }
}
