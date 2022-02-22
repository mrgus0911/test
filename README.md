# department & employee management app
## department
### fields (id, name, description)
### crud feature
## employee
### fields (id, firstName, lastName, email, phone, salary, avatar, bio, departmentId)
### crud feature
### every employee belongs to one department
### when delete department, it complys delete of all users inside



# regarding issue
## I could not run the application due to some package issue. Screenshot: https://www.screencast.com/t/N3OsiW9LC
no sure why happen on your side
you can try this solution or i will fix that issue on your pc
https://stackoverflow.com/questions/60559934/error-in-ngcc-is-already-running-at-process-with-id-xxxx

## He used window.location.reload(); in the add, edit logic. https://github.com/mrgus0911/test/blob/master/src/app/pages/department-add/department-add.component.ts
this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['Your actualComponent']);
});
we can use this kind of temp url visit for angular way coding but did that kind of js way refresh for simple coding in fast speed

## Looks like he used an existing template OR copied things from an existing project. There are things like admin and auth layout components, usage of charts which I think were not even asked in the question.
Yes, what is issue with that? i used angular argon templat and customized that for elegant ui and faster dev, i can coding from scrach using angular cli even

## Used an external package - ngx-localstorage for localstorage instead of using the default LocalStorage object.
no difference, it is only angular way wrapper of localstorage
