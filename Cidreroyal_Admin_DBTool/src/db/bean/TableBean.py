#!/usr/bin/python
# -*- coding: utf-8 -*-
# __author__ = 'gaojun'

# 定义数据库对象
# TableBean
class TableBean(object):
    def __init__(self, name, comment, isAdmin):
        self.name = name
        self.comment = comment
        if 'true' == isAdmin:
            self.isAdmin = True
        else:
            self.isAdmin = False

    def setColumns(self, columns):
        self.columns = columns

    def setIndexs(self, indexs):
        self.indexs = indexs

    def setIsAdmin(self, isAdmin):
        if 'true' == isAdmin or True == isAdmin:
            self.isAdmin = True
        else:
            self.isAdmin = False
