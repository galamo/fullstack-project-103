

export function TableTBody<T>(props: { data: Array<T> }) {
    return <tbody>
        {props.data.map((c: T) => {
            return <tr>
                {Object.values(c as any).map(d => <td> {d as any} </td>)}
            </tr>
        })}
    </tbody>
}