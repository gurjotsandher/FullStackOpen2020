import React from 'react';
import Stat from './Stat';

const Statistics = (props) => {
    let data = props.data;
    console.log(data);

  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Attribute</td>
                    <td>Score</td>
                </tr>
                <tr>
                    <td>
                        <Stat name={"Good"} />
                    </td>
                    <td>
                        <Stat score={data.good} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Stat name={"Neutral"} />
                    </td>
                    <td>
                        <Stat score={data.neutral} />
                    </td>
                </tr>
                <tr>
                <td>
                        <Stat name={"Bad"} />
                    </td>
                    <td>
                        <Stat score={data.bad} />
                    </td>
                </tr>
                <tr>
                <td>
                        All:
                    </td>
                    <td>
                        {data.good + data.bad + data.neutral}
                    </td>
                </tr>
                <tr>
                    <td>
                        Average:
                    </td>
                    <td>
                        {(data.good - data.bad) / (data.good + data.bad + data.neutral)}
                    </td>
                </tr>
                <tr>
                <td>
                        Positive:
                    </td>
                    <td>
                        {(data.good / (data.good + data.bad + data.neutral) )}
                    </td>
                </tr>
            </tbody>
        </table>
        {/* <Stat name={"Good"} score= {data.good} />
        <Stat name={"Neutral"} score= {data.neutral} />
        <Stat name={"Bad"} score= {data.bad} />
        All: {data.good + data.bad + data.neutral}
        <br/>
        Average: {(data.good - data.bad) / (data.good + data.bad + data.neutral)}
        <br/>
        Positive: {(data.good / (data.good + data.bad + data.neutral) )} */}
    </div>
  );
}
export default Statistics;
