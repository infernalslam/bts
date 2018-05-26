<template>
  <div>
    <div class="row card">
        <b class="col">Brand</b>
        <div class="col"><a href="#">News</a></div>
        <div class="col"><a href="#">About</a></div>
        <div class="col"><a href="#">Docs</a></div>
        <div class="col"><a href="#">Login</a></div>
    </div>
     <div class="c">
        Container Example
    </div>
    
    <div class="row">
        <div class="7 col">Seven</div>
        <div class="5 col">Five</div>
    </div>
    <h1>Heading</h1>
    <h2>Heading</h2>
    <h3>Heading</h3>
    <h4>Heading</h4>
    <h5>Heading</h5>
    <h6>Heading</h6>
    <p>This is a paragraph. The font family is <a href="https://fonts.google.com/specimen/Nunito">Nunito</a>.
    <b>Some bold text.</b> <i>Italics also looks nice.</i>
    You can <u>underline</u> things you feel are important.
    Lit has styles that override the default heading styles, including margin.</p>
    <pre><code>
    <h4>Code Block Example</h4>
    </code></pre>
     <a class="btn" href="">Link</a>
    <button class="btn">Button</button>
    <button class="btn primary">Primary Button</button>

     <ul>
        <li>First Item</li>
        <li>
            Second Item
            <ul>
                <li>Sub Item 1</li>
                <li>Sub Item 2</li>
            </ul>
        </li>
        <li>Third Item</li>
    </ul>

     <div class="row">
            <div class="6 col">
                Email
                <input class="card w-100" type="email" placeholder="opensource@mail.com">
            </div>
            <div class="6 col">
                Additional Info
                <select class="card w-100">
                    <option value="Option 1">Question</option>
                    <option value="Option 2">Compliment</option>
                    <option value="Option 3">Problem</option>
                </select>
            </div>
        </div>
        <div class="row">
            Message
            <textarea class="card w-100" placeholder="Some information here"></textarea>
            <input type="checkbox">
            I am not a robot
            <hr>
            <button class="btn primary">Submit</button>
        </div>
           <table class="w-100">
        <thead>
            <tr>
                <th>Name</th>
                <th>Feature Parity (compared to lit)</th>
                <th>Size (bytes)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>lit</td>
                <td>Full</td>
                <td>395</td>
            </tr>
            <tr>
                <td>Skeleton</td>
                <td>Full</td>
                <td>1650</td>
            </tr>
        </tbody>
    </table>

    <div class="card">
            <h4>Simple Card</h4>
            <p>Here is some text that generally describes the card, or something about it.</p>
            <button class="btn">Okay</button>
            <button class="btn primary">Cancel</button>
        </div>
        
        <div class="row">
            <div class="card col">
                <img src="https://picsum.photos/400/300/?random" class="w-100">
                <h4>Card Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consectetur adipisci, asperiores odit repellat, explicabo expedita atque aut illum. </p>
                <button class="btn">Okay</button>
                <button class="btn primary">Cancel</button>
            </div>
            <div class="card col">
                <img src="https://picsum.photos/400/301/?random" class="w-100">
                <h4>Card Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consectetur adipisci, asperiores odit repellat, explicabo expedita atque aut illum. </p>
                <button class="btn">Okay</button>
                <button class="btn primary">Cancel</button>
            </div>
        </div>
        <hr>
  </div>
</template>

<script>
export default {
}
</script>
