# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-31 16:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20160130_1625'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='goal',
            options={'ordering': ('-created',)},
        ),
        migrations.AlterField(
            model_name='goal',
            name='created',
            field=models.DateTimeField(auto_now_add=True, db_index=True),
        ),
    ]