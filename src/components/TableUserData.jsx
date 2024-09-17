import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "../context/themeContext";

const TableUserData = ({ data, isLoading }) => {
  const { theme } = useTheme();

  const cellStyle = {
    color: theme.textColor,
    textAlign: 'center'
  };
  
  return (
    <div className="table">
      <TableContainer>
        <Table>
          {data && data.length > 0 ?(
            <TableHead>
            <TableRow>
              <TableCell style={cellStyle}>WPM</TableCell>
              <TableCell style={cellStyle}>Accuracy</TableCell>
              <TableCell style={cellStyle}>Correct Characters</TableCell>
              <TableCell style={cellStyle}>Incorrect Characters</TableCell>
              <TableCell style={cellStyle}>Missed Characters</TableCell>
              <TableCell style={cellStyle}>Extra Characters</TableCell>
              <TableCell style={cellStyle}>Date</TableCell>
            </TableRow>
          </TableHead>
          ):''}
          
          <TableBody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell style={cellStyle}>{item.wpm}</TableCell>
                  <TableCell style={cellStyle}>{item.accuracy}%</TableCell>
                  <TableCell style={cellStyle}>{item.correctChars}</TableCell>
                  <TableCell style={cellStyle}>{item.inCorrectChars}</TableCell>
                  <TableCell style={cellStyle}>{item.missedChars}</TableCell>
                  <TableCell style={cellStyle}>{item.extraChars}</TableCell>
                  <TableCell style={cellStyle}>{item.timeStamp.toDate().toLocaleString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} style={cellStyle}>
                <h1>You haven't taken any tests yet!!!</h1>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUserData;