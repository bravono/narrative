import React from "react";
import AnswerQueueButtons from "./composed/AnswerQueueButtons";
import Lever from "./Lever";
import "../css/Barrel.css";

const Barrel = () => {
  return (
    <div className="barrel-set">
      <Lever />
      <div className="barrel">
        <table>
          <thead>
            <th>HEADING HERE </th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>6</td>
              <td>6</td>
              <td>6</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>8</td>
              <td>8</td>
              <td>8</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>9</td>
              <td>9</td>
              <td>9</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        {/* <img src="/assets/Column_dotted.svg" className="column_dotted" /> */}
      </div>
      <p>Select Up to Six</p>
      <AnswerQueueButtons />
    </div>
  );
};

export default Barrel;
