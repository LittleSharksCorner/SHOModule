# Generated by Django 3.2.8 on 2022-01-29 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0021_force_forcelog_forcemouseevent'),
    ]

    operations = [
        migrations.CreateModel(
            name='posttest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(blank=True, max_length=100)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('question', models.CharField(blank=True, max_length=25)),
                ('choice', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='posttestLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=25)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('timeStamp', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='posttestLog2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=25)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('timeStamp', models.CharField(max_length=100)),
                ('clickX', models.CharField(blank=True, max_length=25)),
                ('clickY', models.CharField(blank=True, max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='posttestMouseEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=100)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('timeStamp', models.CharField(max_length=100)),
                ('mouseX', models.CharField(blank=True, max_length=25)),
                ('mouseY', models.CharField(blank=True, max_length=25)),
                ('clickX', models.CharField(blank=True, max_length=25)),
                ('clickY', models.CharField(blank=True, max_length=25)),
                ('clickedITMtl', models.CharField(blank=True, max_length=25)),
                ('clickedITMbr', models.CharField(blank=True, max_length=25)),
            ],
        ),
    ]
