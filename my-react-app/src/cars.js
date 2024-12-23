import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function Car({ name, model, image }) {
  return (
    <Card
      sx={{
        width: 250,
        margin: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      {image ? (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`${name} ${model}`}
        />
      ) : (
        <CardMedia
          component="div"
          sx={{
            height: 140,
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            color: "#888",
            textAlign: "center",
          }}
        >
          Imagen no disponible
        </CardMedia>
      )}

      <CardContent>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
            <div>{`${name}`}</div>
            <div>{`Model ${model}`}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Car;