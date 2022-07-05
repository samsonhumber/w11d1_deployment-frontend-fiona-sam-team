export default function NetlifyForm() {
   return (
   <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact"/>
    <p>
    <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
    <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <input type="submit" value="Submit form"></input>
    </form>) 
}


/*
<p>
      <label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <input type="submit" value="Submit form"></input>
    </p>
    */