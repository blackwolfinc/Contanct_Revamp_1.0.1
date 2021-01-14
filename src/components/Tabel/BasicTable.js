import React from 'react'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import MOCK_DATA from "../MOCK_DATA.json"
import {COLUMNS} from "./colom"
export const BasicTable = () => {
    return (
        <div>
            return <ReactFlexyTable data={MOCK_DATA}  globalSearch columns={COLUMNS} filterable nonFilterCols={["gender","email"]}/>
        </div>
    )
}
