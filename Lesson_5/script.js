function intro() {
    document.write(`
        <html>
        <head>
            <style>
                body {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding-top: 150px;
                }

                h1 {
                    font-size: 40px;
                    color: #ffff00;
                }

                p {
                    font-size: 24px;
                    margin: 15px;
                }

                .box {
                    background: rgba(255,255,255,0.2);
                    padding: 40px;
                    width: 500px;
                    margin: auto;
                    border-radius: 25px;
                }
            </style>
        </head>

        <body>
            <div class="box">
                <h1> Hi!</h1>
                <p>My name is <b>Noah</b></p>
                <p> I want to be a game developer</p>
            </div>
        </body>
        </html>
    `);
}


function funFact() {
    document.write(`
        <html>
        <head>
            <style>
                body {
                    background: linear-gradient(135deg, #ff9966, #ff5e62);
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding-top: 150px;
                }

                h1 {
                    font-size: 40px;
                    color: #ffff00;
                }

                p {
                    font-size: 22px;
                    margin: 15px;
                }

                .box {
                    background: rgba(255,255,255,0.2);
                    padding: 40px;
                    width: 600px;
                    margin: auto;
                    border-radius: 25px;
                }
            </style>
        </head>

        <body>
            <div class="box">
                <h1> Fun Fact!</h1>
                <p>Did you know?</p>
                <p>
                    The first programmer in the world was
                    <b>Ada Lovelace</b>.
                </p>
            </div>
        </body>
        </html>
    `);
}

