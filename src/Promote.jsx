import React from 'react'
import Square from './Square'
import {move} from './Game'
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

const promotionPieces = ['r', 'n', 'b', 'q']

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

export default function Promote({
    promotion: {from, to, color},
}) {
    return (
        <div className="board">
            {promotionPieces.map((p, i) => (
                <div key={i} className="promote-square">
                    <Square black={i % 3 === 0}>
                        <div className="piece-container" onClick={() => move(from, to, p)}>
                            <img src={getPiece(p, color)} alt="" className="piece cursor-pointer"/>
                        </div>
                    </Square>
                </div>
            ))}
        </div>
    )
}
