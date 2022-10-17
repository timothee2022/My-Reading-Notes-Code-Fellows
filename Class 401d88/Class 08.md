# Class 8

## Here is my Class 8 reading notes

[5 steps to RBAC](https://www.csoonline.com/article/3060780/security/5-steps-to-simple-role-based-access-control.html)

1. RBAC is the idea of assigning system access to users based on their role within an organization. The system needs of a given workforce are analyzed, with users grouped into roles based on common job responsibilities and system access needs. Access is then assigned to each person based strictly on their role assignment. With tight adherence to access requirements established for each role, access management becomes much easier.
"Quoting from the reading material"

2. RBAC implementation 
Hopefully I have convinced you to take a closer look at RBAC. If so, consider the following simplified five-step approach to getting it implemented:

* Inventory your systems

    Figure out what resources you have for which you need to control access, if you don't already have them listed. Examples would include an email system, customer database, contact management system, major folders on a file server, etc. 

* Analyze your workforce and create roles

    You need to group your workforce members into roles with common access needs.  Avoid the temptation to have too many roles defined. Keep them as simple and stratified as possible.

    For example, you might have a basic user role, which includes the access any employee would need, such as email and the intranet site. Another role might be a customer service rep, that would have read/write access to the customer database, and a customer database administrator, that would have full control of the customer database. 

* Assign people to roles

    Now that you have a list of roles and their access rights, figure out which role(s) each employee belongs in, and set their access accordingly. 

* Never make one-off changes

    Resist any temptation to make a one-off change for an employee with unusual needs. If you begin doing this, your RBAC system will quickly begin to unravel. Change the roles as required or add new ones when really necessary. 

* Audit

    Periodically review your roles, the employees assigned to them, and the access permitted for each. If you discover, for example, that a role has unnecessary access to a particular system, change the role and adjust the access level for all employees in that role. 

    As an example, many healthcare organizations, given the need for regulatory compliance in controlling access to medical records, use RBAC to define exactly what access to medical records each type of clinician may need.  While a doctor might have almost unlimited access to the records of patients he/she manages, a receptionist might be limited to basic contact information needed to manage appointments.  Given the large number of staff members in well stratified roles, RBAC is an efficient way to control record access in compliance with HIPAA, and other regulations.

    There are tools that can help with setting up RBAC. Many systems, such as Microsoft Active Directory, have built in roles that you can use as a starting point, which you can extend to fit your unique situation. You can also use an identity management system to automate the assignment of privileges based on role. 
    "Quoting from the reading material"

3. I will be applying the "Assign people to roles approch while implementing the RBAC.

[wiki - RBAC](https://en.wikipedia.org/wiki/Role-based_access_control)

1. The difference between authentication and authorization is: Authentication: proves users are who they say they are. Authorization: permits users to access certain tools, data, or areas on a network.
"Quoting from the reading material"

2. Three primary rules are defined for RBAC:

Role assignment: A subject can exercise a permission only if the subject has selected or been assigned a role.
Role authorization: A subject's active role must be authorized for the subject. With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.
Permission authorization: A subject can exercise a permission only if the permission is authorized for the subject's active role. With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized.
"Quoting from the reading material"

3. RBAC is a system that help to assign role to the user depending on they aess level. 


For live access to my page, please visit the following link: 
https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git