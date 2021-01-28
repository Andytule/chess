import React from 'react'
import {useDrag, DragPreviewImage} from 'react-dnd'
import bb from './assets/b_b.png'
import bw from './assets/b_w.png'
import kb from './assets/k_b.png'
import kw from './assets/k_w.png'
import nb from './assets/n_b.png'
import nw from './assets/n_w.png'
import pb from './assets/p_b.png'
import pw from './assets/p_w.png'
import qb from './assets/q_b.png'
import qw from './assets/q_w.png'
import rb from './assets/r_b.png'
import rw from './assets/r_w.png'

export default function Piece({piece: {type, color}, position}) {
    const pieces = [
        {name: "bb", image: bb},
        {name: "bw", image: bw},
        {name: "kb", image: kb},
        {name: "kw", image: kw},
        {name: "nb", image: nb},
        {name: "nw", image: nw},
        {name: "pb", image: pb},
        {name: "pw", image: pw},
        {name: "qb", image: qb},
        {name: "qw", image: qw},
        {name: "rb", image: rb},
        {name: "rw", image: rw}
    ]
    
    function getPiece (t, c) {
        let chessPiece = bb
        let i
        for (i of pieces) {
            if (i.name === `${t}${c}`) {
                chessPiece = i.image
            }
        }
        return chessPiece
    }

    const [{isDragging}, drag, preview] = useDrag({
        item: {type: 'piece', id: `${position}_${type}_${color}`},
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging() }
        }
    })
    
    const pieceImg = getPiece(type, color)

    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImg}/>
            <div className="piece-container" ref={drag} style={{opacity: isDragging ? 0 : 1}}>
                <img src={pieceImg} alt="" className="piece"/>
            </div>
        </>
    )
}
