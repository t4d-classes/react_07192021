# Exercise 5

Instructions: Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

## Requirements

**Requirement 1.** Under the table of states in Region Tool display a form to add a new state. There should be an input control for the name and abbreviation. For the region, use a select drop down with the following hard coded options: North, South, Central, West.

Use the following HTML examples for structuring and styling the input controls and drop down control. The select element uses the same `value`, `name` and `onChange` props to manage the form state.

```html
<div class="col-md-6 form-group lmgbi_formEntry">
  <label class="lmgbi_formTitle">
    Agency Name:
  </label>
  <span class="required-marker"></span>
  <br>
  <input class="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr" type="text">
  <br>
  <span class="lmgbi_formAlert" style="color:red;display:none;">Agency Name required</span>
</div>

<div class="col-md-3 form-group form-inline lmgbi_formEntry">
  <label class="lmgbi_formTitle">State:</label><span class="required-marker"></span>
  <br>
  <select class="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
    id="lmgbi_formState">
    <option>Select One</option>
    <option value="AK|West">AK</option>
    <option value="AL|South">AL</option>
    <option value="AR|Central">AR</option>
    <option value="AZ|Central">AZ</option>
  </select>
  <br>
  <span class="lmgbi_formAlert" style="color:red;display:none;">State required</span>
</div>
```

**Requirement 2.** Add a save button to the form. When the user clicks save, save the data to the REST API and refresh the table.

**Requirement 3.** Use a custom hook to manage the stateful data and logic of the Regions page.


**Ensure it all works, and please raise your hand when you are done.**