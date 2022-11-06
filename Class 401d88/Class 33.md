# Class 33

## Here is my Class 33 reading notes

[What is Role Based Access Control (RBAC)?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)

1. What is Role Based Access Control (RBAC)?

Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network.

Employees are only allowed to access the information necessary to effectively perform their job duties. Access can be based on several factors, such as authority, responsibility, and job competency. In addition, access to computer resources can be limited to specific tasks such as the ability to view, create, or modify a file.

As a result, lower-level employees usually do not have access to sensitive data if they do not need it to fulfill their responsibilities. This is especially helpful if you have many employees and use third-parties and contractors that make it difficult to closely monitor network access. Using RBAC will help in securing your company’s sensitive data and important applications.

"Quoting from the reading material"

2. Examples of Role-Based Access Control

Through RBAC, you can control what end-users can do at both broad and granular levels. You can designate whether the user is an administrator, a specialist user, or an end-user, and align roles and access permissions with your employees’ positions in the organization. Permissions are allocated only with enough access as needed for employees to do their jobs.

What if an end-user's job changes? You may need to manually assign their role to another user, or you can also assign roles to a role group or use a role assignment policy to add or remove members of a role group.

Some of the designations in an RBAC tool can include:

* Management role scope – it limits what objects the role group is allowed to manage.
* Management role group – you can add and remove members.
* Management role – these are the types of tasks that can be performed by a specific role group.
* Management role assignment – this links a role to a role group.

By adding a user to a role group, the user has access to all the roles in that group. If they are removed, access becomes restricted. Users may also be assigned to multiple groups in the event they need temporary access to certain data or programs and then removed once the project is complete.

Other options for user access may include:

* Primary – the primary contact for a specific account or role.
* Billing – access for one end-user to the billing account.
* Technical – assigned to users that perform technical tasks.
* Administrative – access for users that perform administrative tasks.

"Quoting from the reading material"

3. Benefits of RBAC

* Reducing administrative work and IT support. 

With RBAC, you can reduce the need for paperwork and password changes when an employee is hired or changes their role. Instead, you can use RBAC to add and switch roles quickly and implement them globally across operating systems, platforms and applications. It also reduces the potential for error when assigning user permissions. This reduction in time spent on administrative tasks is just one of several economic benefits of RBAC. RBAC also helps to more easily integrate third-party users into your network by giving them pre-defined roles.

* Maximizing operational efficiency. 

RBAC offers a streamlined approach that is logical in definition. Instead of trying to administer lower-level access control, all the roles can be aligned with the organizational structure of the business and users can do their jobs more efficiently and autonomously.


* Improving compliance. 

All organizations are subject to federal, state and local regulations. With an RBAC system in place, companies can more easily meet statutory and regulatory requirements for privacy and confidentiality as IT departments and executives have the ability to manage how data is being accessed and used. This is especially significant for health care and financial institutions, which manage lots of sensitive data such as PHI and PCI data.

"Quoting from the reading material"

[react-cookie library](https://www.npmjs.com/package/react-cookie)

* setCookie(name, value, [options])
Set a cookie value

* name (string): cookie name
* value (string|object): save the value and stringify the object if needed
* options (object): Support all the cookie options from RFC 6265
* path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages
* expires (Date): absolute expiration date for the cookie
* maxAge (number): relative max age of the cookie from when the client receives it in seconds
* domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
* secure (boolean): Is only accessible through HTTPS?
* httpOnly (boolean): Can only the server access the cookie? Note: You cannot get or set httpOnly cookies from the browser, only the server.
* sameSite (boolean|none|lax|strict): Strict or Lax enforcement

removeCookie(name, [options])
Remove a cookie

* name (string): cookie name
* options (object): Support all the cookie options from RFC 6265
* path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages
* expires (Date): absolute expiration date for the cookie
* maxAge (number): relative max age of the cookie from when the client receives it in seconds
* domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
* secure (boolean): Is only accessible through HTTPS?
* httpOnly (boolean): Can only the server access the cookie? Note: You cannot get or set httpOnly cookies from the browser, only the server.
* sameSite (boolean|none|lax|strict): Strict or Lax enforcement

withCookies(Component)
Give access to your cookies anywhere. Add the following props to your component:

* cookies: Cookies instance allowing you to get, set and remove cookies.
* allCookies: All your current cookies in an object.

[react-cookies component](https://www.npmjs.com/package/react-cookies)

"Quoting from the reading material"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>