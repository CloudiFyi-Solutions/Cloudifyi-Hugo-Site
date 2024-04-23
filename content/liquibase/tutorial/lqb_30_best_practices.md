+++
title="Liquibase Best Practices"
weight=30
+++

## Jump Menu
- [Best Practice 1 Organize your Changelogs](#best-practice-1-organize-your-changelogs)
- [Best Practice 2 Add Comments to Changesets](#best-practice-2-add-comments-to-changesets)
- [Best Practice 3 Use the `<include>` Tag](#best-practice-3-use-the-include-tag)
- [Best Practice 4 Use the `<includeAll>` Tag](#best-practice-4-use-the-includeall-tag)

## Best Practice 1 Organize your Changelogs
As you use Liquibase Pro, the number of your changelogs will grow, and as a result it’s important to organize your changelogs so you can locate them easily. It is a best practice to create a directory to store your changelogs. You then call all these changelogs from a **root changelog**, which itself is **always** an **XML** formatted file.

{{% notice style="note" %}}
See:
- [**Liquibase Changelogs and Changesets**](../explanation/lqb_12_abt_chglgs_chgsets.html)
- [**Liquibase Changelogs and Changesets How-Tos**](../how-tos/lqb_22_ht_chglgs_chgesets.html)
- [Design Your Liquibase Project](https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern)
- [How to Structure a Complex Changelog](https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft)


{{% /notice %}}

[Back to top](#jump-menu)


## Best Practice 2 Add Comments to Changesets
Adding comments to your changesets will save you time in the long run. Comments will help you keep track of important information and organize your changelogs. The format of the comment will depend on whether you are using SQL or XML. 

The syntax used to add a comment:
- XML: 
  ```xml
  <comment>My comment goes here</comment>
  ```

- SQL:
  ```sql
  --My comment goes here
  ```

[Back to top](#jump-menu)


## Best Practice 3 Use the `<include>` Tag
As projects grow, the number of changesets in a changelog can grow unwieldy. The `<include>` tag allows you to break up your changelogs into more manageable pieces. For example, separating changesets into their own files, according to features, releases, or other logical boundaries, will make it easy to find and manage a complex database schema’s script.

- Using the `<include>` tag allows you to reference multiple changelogs from a root changelog. 
- Using the `<include>` tag allows Liquibase to uniquely identify each changeset with the id, author, and file name. As long as the id and author combinations are unique for each file, Liquibase will do the rest.

Included changelogs are run in the order they are found. Make sure that the included changelogs are completely independent or that any required changelogs are run first.

{{% notice style="note" %}}
Files listed will be run in **sequential** order.

See [**Liquibase Changelogs and Changesets How-Tos**](../how-tos/lqb_22_ht_chglgs_chgesets.html) for more details.
{{% /notice %}}

[Back to top](#jump-menu)


## Best Practice 4 Use the `<includeAll>` Tag
As projects grow, the number of changesets in a changelog can grow unwieldy. The `<includeAll>` tag allows you to break up your changelogs into more manageable pieces. It is similar to the `<include>` tag, but instead of passing a particular changelog file to include, you specify a directory, and it will include all **.xml** files as changelog files, and all **.sql** files as individual changes.

{{% notice style="note" %}}
Files **in** the specified directories will be run in **alphabetical** order.

Make sure you have a naming strategy to prevent naming conflicts or the need to rename files to force a reordering.

See [**Liquibase Changelogs and Changesets How-Tos**](../how-tos/lqb_22_ht_chglgs_chgesets.html) for more details.

There are **known issues** using the `<includeAll>` tag when trying to simulate **Ruby on Rails Active Migrations** strategy of a list of changes.
{{% /notice %}}

[Back to top](#jump-menu)


