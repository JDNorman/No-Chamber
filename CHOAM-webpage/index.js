const path = require('path');
const express = require('express');
const React = require('react');
const {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} = require('framer-motion');

const UserCard = (profilepicurl, nickname, username, userjob) => {
    
    const handleMouseMove = (e) => {
        console.log(e.target);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                display: "flex",
                flexDirection: "row",
                width: "35%",
                height: "35%",
                backgroundColor: "#242424",
                borderRadius: "1rem",
                margin: "16px",
                boxShadow: "0 0 16px 0 rgba(0,0,0,1)"
            }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(75px)"
                }}>
                <figure
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "24px 16px"
                    }}>
                    <img
                        src=<script>profilepicurl</script>
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            boxShadow: "0 0 8px 0 #8a53b1"
                        }}>
                </figure>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
                <div
                    style={{
                        height: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                    <div
                        style={{
                            margin: "0",
                            alignSelf: "flex-start",
                            justifySelf: "flex-start",
                            marginBottom: "8px",
                            transform: "translateZ(75px)"
                        }}>
                        <div
                            style={{
                                textAlign: "left",
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                transformStyle: "preserve-3d",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#e6930e",
                                width: "fit-content",
                                fontFamily: "Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif",
                            }}
                            className="spice-purple">nickname
                        </div>
                        <div
                            style={{
                                fontSize: "smaller",
                                fontStyle: "italic",
                                color: "rgba(76, 76, 76, 0, 0.735)",
                            }}
                            className="spice-purple">
                            username
                        </div>
                    </div>
                    <div
                        style={{
                            textJustify: "center",
                            textAlign: "center",
                            color: "white"
                        }}
                        className="spice-purple">
                        userjob
                    </div>
                </div>
            </div>
        </div>
    );
};







// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('h1');
//     heading.textContent = 'Hello, World!';
// });
