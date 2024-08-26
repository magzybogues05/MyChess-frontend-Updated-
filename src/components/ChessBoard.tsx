import React, { useState } from 'react';

import { Chess, Color, PieceSymbol, Square } from 'chess.js';

const MOVE="move"; 

const ChessBoard = ({chess,setBoard,board,socket}:{
    board:({
        square:Square,
        type:PieceSymbol,
        color:Color;
    }|null)[][];
    socket:WebSocket;
    chess:Chess;
    setBoard:any;
}) => {

    const [from,setFrom]=useState<Square|null>(null);

  return <div className="text-white-200">
    {board.map((row,i)=>{
        return <div key={i} className='flex'>
            {
                row.map((square,j)=>{

                    const squareRepresentation= String.fromCharCode(97+(j%8))+""+(8-i) as Square;
                    return <div onClick={()=>{
                        if(!from)
                        {
                            setFrom(squareRepresentation);
                        }
                        else{
                            // setTo(square?.square ?? null);
                            socket.send(JSON.stringify({
                                type:MOVE,
                                payload:{
                                    move:{
                                    from,
                                    to:squareRepresentation
                                    }
                                }
                            }))
                            chess.move({
                                from,
                                to:squareRepresentation
                            });
                            setBoard(chess.board());
                            setFrom(null);
                            console.log({
                                from,
                                to:squareRepresentation
                            });
                        }
                    }} key={j} className={`w-14 h-14 ${(i+j)%2===1 ?'bg-green-500':'bg-white'}`}>
                        <div className='w-full justify-center flex h-full'>
                        <div className='h-full justify-center flex flex-col'>
                        {square ? <img className='w-13' src={`/${square?.color==="b"?square?.type:`${square?.type?.toUpperCase()}_copy`}.png`
                            }/>:null}
                        </div>
                        </div>
                        </div>
                })}
            </div>
    })}</div>;
};

export default ChessBoard;