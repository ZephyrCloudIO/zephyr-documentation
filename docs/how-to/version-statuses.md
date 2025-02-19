

## Route Information
Navigate to: \
```/org/{:organization}/{:project}/{:application}/versions```

## Verification Steps
Locate the Version List Table. Version statuses are displayed in the Status column.

### Updating Version Status
Click the Actions button to open the dropdown menu.
Available actions:
 - Set Version as Deprecated
 - Set Version as Unavailable
 - Set Version as Available
 - Deploy Version

## Validation Rules & Expected Behavior
#### Deploying a Deprecated Version
You can deploy deprecated version, but required warning should appear in the deploy modal. You must check a confirmation box acknowledging the risks before proceeding.
#### Deploying an Unavailable Version
You can't deploy unavailable version. You can only change the version status for such version.
#### Setting a Version as Deprecated
You must select a date and time until which the version remains available. A DatePicker with a TimePicker is provided. Validation:The selected date and time must be later than the current date and time.
#### Setting a Version as Unavailable
You must provide a reason in a text area. \
Validation: ```Joi.string().max(200).min(3).required().messages(validationErrorGeneralStringMessagesField).```
#### Reverting to Available Status
If a version is Deprecated or Unavailable, you should have the option to set it as Available.
To set a version as Available, you simply clicks the Confirm button in the modal.
