const language = "fr"

function ColumnHeader(props: { k: string, mapping: any }) {
    return <span> {props.mapping[props.k][language] || props.mapping[props.k] || props.k} </span>
}
export default function TableTHead(props: { columns: Array<string>, mapping: any }) {
    return <thead>
        <tr>
            {props.columns.map(c => <th> <ColumnHeader k={c} mapping={props.mapping} /> </th>)}
        </tr>
    </thead>
}