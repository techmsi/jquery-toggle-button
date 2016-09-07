# jquery-toggle-button
Jquery toggle text on button &amp; toggle class on specified sections.

## Usage
* Include this script below your Jquery reference

``` <script type="text/javascript" src="../jquery.titlesequence.js"></script>```

```javascript
$('.my-toggle-button').on('click', function (e) {
      $(this).toggleButton({
        on:'Hide Text',
        off:'Show Text',
        className:'myClassToToggle',
        sections:['#mySection', '.myOtherSection']
      });
    })
```
